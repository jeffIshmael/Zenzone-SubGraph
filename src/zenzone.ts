import {
  Approval as ApprovalEvent,
  Transfer as TransferEvent,
  boughtCreditCreated as boughtCreditCreatedEvent,
  buyerRegistered as buyerRegisteredEvent,
  minted as mintedEvent,
  offsetProposalApproved as offsetProposalApprovedEvent,
  offsetProposalCreated as offsetProposalCreatedEvent,
  offsetterRegistered as offsetterRegisteredEvent,
  validatorRegistered as validatorRegisteredEvent
} from "../generated/Zenzone/Zenzone"
import {
  Approval,
  Transfer,
  boughtCreditCreated,
  buyerRegistered,
  minted,
  offsetProposalApproved,
  offsetProposalCreated,
  offsetterRegistered,
  validatorRegistered
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleboughtCreditCreated(
  event: boughtCreditCreatedEvent
): void {
  let entity = new boughtCreditCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.estAmount = event.params.estAmount
  entity.ipfsHash = event.params.ipfsHash
  entity.timestamp = event.params.timestamp
  entity.buyerAdd = event.params.buyerAdd

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlebuyerRegistered(event: buyerRegisteredEvent): void {
  let entity = new buyerRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.buyerId = event.params.buyerId
  entity.compName = event.params.compName
  entity.regPin = event.params.regPin
  entity.category = event.params.category
  entity.description = event.params.description
  entity.buyerAdd = event.params.buyerAdd
  entity.email = event.params.email
  entity.phoneNo = event.params.phoneNo

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleminted(event: mintedEvent): void {
  let entity = new minted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleoffsetProposalApproved(
  event: offsetProposalApprovedEvent
): void {
  let entity = new offsetProposalApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleoffsetProposalCreated(
  event: offsetProposalCreatedEvent
): void {
  let entity = new offsetProposalCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.category = event.params.category
  entity.description = event.params.description
  entity.estAmount = event.params.estAmount
  entity.timestamp = event.params.timestamp
  entity.ipfsHash = event.params.ipfsHash
  entity.offsetterAdd = event.params.offsetterAdd
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleoffsetterRegistered(
  event: offsetterRegisteredEvent
): void {
  let entity = new offsetterRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.offsetterId = event.params.offsetterId
  entity.compName = event.params.compName
  entity.regPin = event.params.regPin
  entity.category = event.params.category
  entity.offSetCat = event.params.offSetCat
  entity.description = event.params.description
  entity.offsetterAdd = event.params.offsetterAdd
  entity.email = event.params.email
  entity.phoneNo = event.params.phoneNo

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlevalidatorRegistered(
  event: validatorRegisteredEvent
): void {
  let entity = new validatorRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.validatorId = event.params.validatorId
  entity.name = event.params.name
  entity.regNo = event.params.regNo
  entity.validatorAdd = event.params.validatorAdd

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
