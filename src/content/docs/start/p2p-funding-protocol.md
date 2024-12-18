---
title:  "P2P Funding Protocol"
description:  "Decentralized Funding Mechanism on the Bitcoin Network"
sidebar:
  order: 1
  
---
 
#  P2P Funding Protocol

```
Number:  BCIP-0005
Title:   P2P Funding Protocol
Type:    Protocol
Status:  Draft
Authors: Dan Gershony, David Gershony
Created: 2023-02-28
```

## Abstract

P2PFP a decentralized funding mechanism on the Bitcoin network. It utilizes time-locked contracts whereby investors lock bitcoin into timebased stages. Each stage, upon reaching its time limit, allows the founders to claim the locked bitcoins (and optionally issue in return ownership interest to investors). Alternatively, investors can recover any remaining coins at any time, however recovery may incur penalties. The system distinguishes two types of investors: seed investors and regular investors. Seeders, often early investors, always incur penalties during coin recovery. Regular investors seeking to recover their coins have two options: they can either accept the penalty or, if enough seeders have already recovered their coins with penalty, they can use the seeders keys for a penalty-free recovery. This mitigates fraud, and boosts investor confidence by enabling active control over their investments.  

## Copyright

TBD

## Motivation

In previous blockchain projects, founders had little incentive to protect investors' interests, such as the value of the issued tokens, once the Bitcoin investment was released. Investors often resorted to lawsuits and social pressure to seek restitution. In this approach, our aim is to protect investors from fraud and mismanagement while also aligning the project incentives with those of the investors.

Moreover, it encourages Bitcoin holders to invest and potentially allocate a portion of their Bitcoin holdings out of HODL mode, thus making it safer for their investments to work for them and for the Bitcoin network as a whole by unlocking more funds for investment.

## Design

This proposal defines an investment protocol where funds are committed to a project into stages, each stage has various spending conditions. The spending conditions for project founders use time-locked contracts and founders keys, while those for investors incorporate threshold multisig schemes together with other investors or pre-signed recovery transactions, also known as revocations.

The project founders designate individual stages, each with a defined timeline and expected percentage for each stage. Interested investors lock their Bitcoin according to these criteria but also incude mechanisems to recover thier investment.  

The design identifies two types of investors: early investors, termed seeders as they initiate the investment, and subsequent regular investors. Before publishing the investment trasnaction, both seeders and regular investors generate a multisig penalty transaction, pre-signed and locked in to a long time-lock commitment, in case of seeders they will also commit to a secret. This transaction grants the investor the ability to recover their investment at anytime by incuring a long timelock penalty.  

Following the seeding stage, regular investors can introduce an additional spending path to their investment transaction. They do so by using a threshold multisig that employs the pubkey of the seeders secret in the recovery transaction. Once a sufficient number of seeders have initiated their recovery transaction, regular investors can exit the investment without a penalty.  

#### Interactive Pre-signing of the Recovery Transaction  

The protocol mandates that both the founder and investor co-sign the penalty recovery transaction. An investor will not broadcast the investment transaction until they have the founder's signature as part of the recovery transaction. To recover their funds, investors need to publish the recovery transaction.

## Specification  

We utilize the latest upgrades to the Bitcoin network, namely Taproot and Schnorr. Taproot enables the commitment to multiple execution paths of a Bitcoin output, this allows us to create different conditions on the spending of coins.  

### Project parameteres setup

To setup investment transactions certain parameteres need to be defined in advance to be able to build the tapscript spending conditions.

#### Project initial parameteres:

- **Campaign start date** : this is so the funds in the first stage can be locked until the start date.  
- **Target funding amount** : if target funding was not reached investors will exit (probably with penalty).  
- **Stage funding break down and stage dates** - so investors know how many Bitcoin payment stages (outputs) to create and what are the time locks and amounts in each stage.  
- **Project end date** : to be able to create a condition where investors can take back funds if they are never used.    
- **Founder keys** : the keys of the project founder that will claim the investment when a stage is reached.    
- **Seeder window** : the window where seeders can invest 
- **Seeder min amount** : the minimum amount a seeder must invest to be considered a seeder

#### Investor parameteres: 

- **Investor key** : the key an investor controls to release their reclaim of an investment.  
- **Seeders Hash Key** : tbd

Each investor will then generate a transaction with an output for each stage locked under the conditions agreed upon earlier.

### Key derivation path.   

In order to facilitate the retrieval of coins and recovery keys during active investments, we establish a derivation path that specifies the generation of different keys.

All keys must be hardened derivation following `m / purpose' / coin_type' / project_id' / member_type'`

**Investor key**   - `m / 5' / 0' / n' / 1'`  
**Founder key**   - `m / 5' / 0' / n' / 2'`  
**Founder recovery key**   - `m / 5' / 0' / n' / 3'`  
**Investor seed secret**  - `m / 5' / 0' / n' / 4'`  

n = a project identifier, it's numeric and unique per project 

### The taproot spending conditions. 

The spending condition for each stage is represented by the taproot path. To ensure a controlled release of funds as the project advances, different time locks are applied to each stage. This approach allows for a gradual allocation of resources as the project team successfully meets their predetermined goals and objectives.

#### Founder taproot path

The funds are being held in a time-locked script, which can only be spent after a certain amount of time has elapsed. Additionally, the script requires a signature from the founder key, which ensures that only authorized individuals can spend the funds.

```
<stage_time_lock> 
OP_CHECKLOCKTIMEVERIFY 
OP_DROP 
<founder-key> 
OP_CHECKSIG   
```

#### Investor taproot path with penalty

The funds are being held in a multi-signature script, which requires signatures from the investor and founder before the funds can be spent.  

**Regular investors**

```
<investor-key> 
OP_CHECKSIG   
<founder-key> 
OP_CHECKSIG   
```

**Seed investors**

```
<investor-key> 
OP_CHECKSIG   
<founder-key> 
OP_CHECKSIG   
OP_HASH256<H(seed__secret)> 
OP_EQUALVERIFY
```

This is the spending condition that needs to be presigned by the founder in order for the investor to be able to recover with a penalty

The script the founder will sign will look like this

```
<penalty_time_lock> 
OP_CHECKLOCKTIMEVERIFY 
OP_DROP 
<investor-key> 
OP_CHECKSIG 
```

The founder will provide the investor with the signatures of the output for each stage in the investment transaction, using SIGHASH_SINGLE | SIGHASH_ANYONECANPAY to commit to each input separately. This allows each input to be potentially recovered independently by the investors. The investor must keep a backup of such signatures to be able to recover thier funds.  

#### Investor taproot path no penalty

To avoid penalty when recovering funds a regular investor will commit an additional spending path to the investment transaction that is a threshold of secrets (or multisig) of the secrets in the seeders transactions.  

Combining the secrets a recovey without penalty is possible

```
<seed-key_1> CHECKSIG 
<seed-key_2> CHECKSIGADD ... <seed-key_n> CHECKSIGADD m NUMEQUAL 
<investor-key> OP_CHECKSIGVERIFY    
```

#### Project expiry date  

Once the project finish expiry has been reached, the investor may claim any remaining coins that were not claimed by the project.  

```
<finish_date_time_lock> 
OP_CHECKLOCKTIMEVERIFY 
OP_DROP 
<investor-key> 
OP_CHECKSIG 
```

#### Commitments and proofs

A Bitcoin Pay-to-Taproot (P2TR) output employs a commitment scheme to obscure its underlying scripts. In order to initiate a spend of the funds held in the output, the spender must possess knowledge of the hash of the commitment's leaves. Consequently, the investor must divulge the script to the spender to facilitate spending.

For the investor this is not an issue as all the parameteres to create the script and generate the hash of the commitment's leaves is known in advance and is made public by the project.

To enable the project founder to access the public key of the investors, an additional `op_return` output is added to the transaction. This output contains the investor's public key (and hash of the secret for seeders), which the founder can use to generate the hash of the commitment's leaves and claim the coins.  

To distinguish transactions belonging to a particular project, a public common address is defined as a unique project identifier. A small fee is sent to this address, which allows the project to be easily identified and tracked.  

With this information, a transaction contains all the necessary data for project founders to discover it and access the invested coins. By utilizing specialized block explorers, it is possible to track the total investment raised by a particular project.  

### Transaction structure

This is an example of a transaction by one investor each invetor must generate such a transaction 

M(n)  - we assume 5 stages  
FK    - 1 founder key  
FRK   - 1 founder recovery key  
IK    - 1 investor key   
SK(n) - N seeders  
ED    - expiry date  

```ascii
+--------------------------+
| investment tx |
+--------------------------+
  |  |  |  |  |  |  |
  |  |  |  |  |  |  |
  |  |  |  |  |  |  |
  |  |  |  |  |  |  | project id   
  |  |  |  |  |  |  +------------------------> P2WSH
  |  |  |  |  |  |
  |  |  |  |  |  | investor pubkey   
  |  |  |  |  |  +------------------------> op_return : IK + SK (optional only for seeders)
  |  |  |  |  | 
  |  |  |  |  |                                                        +-------------+
  |  |  |  |  |                  +--> FK + M1 timelock             --> | founder tx  |
  |  |  |  |  |                  |                                     +-------------+
  |  |  |  |  |                  |                                     +-------------+
  |  |  |  |  |                  +--> IK + FRK + optional Hash(SK) --> | investor tx | <-- presigned recovery penalty
  |  |  |  |  |                  |                                     +-------------+
  |  |  |  |  |  Stage 1 output  |                                     +-------------+
  |  |  |  |  +------------------+--> IK + [S1-SN]                 --> | investor tx | <-- optional regular investors
  |  |  |  |                     |                                     +-------------+
  |  |  |  |                     |                                     +-------------+
  |  |  |  |                     +--> IK + ED timelock             --> | investor tx |
  |  |  |  |                                                           +-------------+
  |  |  |  | Stage 2 output                
  |  |  |  +--------------------> same as stage 1 but with M2 timelock 
  |  |  |
  |  |  |                 
  |  |  | Stage 3 output     
  |  |  +--------------------> same as stage 1 but with M3 timelock 
  |  |                    
  |  |
  |  | Stage 4 output
  |  +--------------------> same as stage 1 but with M4 timelock
  |                      
  |                      
  | Stage 5 output      
  +--------------------> same as stage 1 but with M5 timelock
```

### Acknowledgement

TBD

### Privacy

TBD
