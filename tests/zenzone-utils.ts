import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/Zenzone/Zenzone"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createboughtCreditCreatedEvent(
  proposalId: BigInt,
  estAmount: BigInt,
  ipfsHash: string,
  timestamp: BigInt,
  buyerAdd: Address
): boughtCreditCreated {
  let boughtCreditCreatedEvent = changetype<boughtCreditCreated>(newMockEvent())

  boughtCreditCreatedEvent.parameters = new Array()

  boughtCreditCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  boughtCreditCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "estAmount",
      ethereum.Value.fromUnsignedBigInt(estAmount)
    )
  )
  boughtCreditCreatedEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromString(ipfsHash))
  )
  boughtCreditCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  boughtCreditCreatedEvent.parameters.push(
    new ethereum.EventParam("buyerAdd", ethereum.Value.fromAddress(buyerAdd))
  )

  return boughtCreditCreatedEvent
}

export function createbuyerRegisteredEvent(
  buyerId: BigInt,
  compName: string,
  regPin: BigInt,
  category: string,
  description: string,
  buyerAdd: Address,
  email: string,
  phoneNo: BigInt
): buyerRegistered {
  let buyerRegisteredEvent = changetype<buyerRegistered>(newMockEvent())

  buyerRegisteredEvent.parameters = new Array()

  buyerRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "buyerId",
      ethereum.Value.fromUnsignedBigInt(buyerId)
    )
  )
  buyerRegisteredEvent.parameters.push(
    new ethereum.EventParam("compName", ethereum.Value.fromString(compName))
  )
  buyerRegisteredEvent.parameters.push(
    new ethereum.EventParam("regPin", ethereum.Value.fromUnsignedBigInt(regPin))
  )
  buyerRegisteredEvent.parameters.push(
    new ethereum.EventParam("category", ethereum.Value.fromString(category))
  )
  buyerRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  buyerRegisteredEvent.parameters.push(
    new ethereum.EventParam("buyerAdd", ethereum.Value.fromAddress(buyerAdd))
  )
  buyerRegisteredEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  buyerRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "phoneNo",
      ethereum.Value.fromUnsignedBigInt(phoneNo)
    )
  )

  return buyerRegisteredEvent
}

export function createmintedEvent(sender: Address, amount: BigInt): minted {
  let mintedEvent = changetype<minted>(newMockEvent())

  mintedEvent.parameters = new Array()

  mintedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  mintedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return mintedEvent
}

export function createoffsetProposalApprovedEvent(
  proposalId: BigInt
): offsetProposalApproved {
  let offsetProposalApprovedEvent = changetype<offsetProposalApproved>(
    newMockEvent()
  )

  offsetProposalApprovedEvent.parameters = new Array()

  offsetProposalApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )

  return offsetProposalApprovedEvent
}

export function createoffsetProposalCreatedEvent(
  proposalId: BigInt,
  category: string,
  description: string,
  estAmount: BigInt,
  timestamp: BigInt,
  ipfsHash: string,
  offsetterAdd: Address,
  approved: boolean
): offsetProposalCreated {
  let offsetProposalCreatedEvent = changetype<offsetProposalCreated>(
    newMockEvent()
  )

  offsetProposalCreatedEvent.parameters = new Array()

  offsetProposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  offsetProposalCreatedEvent.parameters.push(
    new ethereum.EventParam("category", ethereum.Value.fromString(category))
  )
  offsetProposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  offsetProposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "estAmount",
      ethereum.Value.fromUnsignedBigInt(estAmount)
    )
  )
  offsetProposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  offsetProposalCreatedEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromString(ipfsHash))
  )
  offsetProposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "offsetterAdd",
      ethereum.Value.fromAddress(offsetterAdd)
    )
  )
  offsetProposalCreatedEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return offsetProposalCreatedEvent
}

export function createoffsetterRegisteredEvent(
  offsetterId: BigInt,
  compName: string,
  regPin: BigInt,
  category: string,
  offSetCat: string,
  description: string,
  offsetterAdd: Address,
  email: string,
  phoneNo: BigInt
): offsetterRegistered {
  let offsetterRegisteredEvent = changetype<offsetterRegistered>(newMockEvent())

  offsetterRegisteredEvent.parameters = new Array()

  offsetterRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "offsetterId",
      ethereum.Value.fromUnsignedBigInt(offsetterId)
    )
  )
  offsetterRegisteredEvent.parameters.push(
    new ethereum.EventParam("compName", ethereum.Value.fromString(compName))
  )
  offsetterRegisteredEvent.parameters.push(
    new ethereum.EventParam("regPin", ethereum.Value.fromUnsignedBigInt(regPin))
  )
  offsetterRegisteredEvent.parameters.push(
    new ethereum.EventParam("category", ethereum.Value.fromString(category))
  )
  offsetterRegisteredEvent.parameters.push(
    new ethereum.EventParam("offSetCat", ethereum.Value.fromString(offSetCat))
  )
  offsetterRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  offsetterRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "offsetterAdd",
      ethereum.Value.fromAddress(offsetterAdd)
    )
  )
  offsetterRegisteredEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  offsetterRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "phoneNo",
      ethereum.Value.fromUnsignedBigInt(phoneNo)
    )
  )

  return offsetterRegisteredEvent
}

export function createvalidatorRegisteredEvent(
  validatorId: BigInt,
  name: string,
  regNo: BigInt,
  validatorAdd: Address
): validatorRegistered {
  let validatorRegisteredEvent = changetype<validatorRegistered>(newMockEvent())

  validatorRegisteredEvent.parameters = new Array()

  validatorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  validatorRegisteredEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  validatorRegisteredEvent.parameters.push(
    new ethereum.EventParam("regNo", ethereum.Value.fromUnsignedBigInt(regNo))
  )
  validatorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "validatorAdd",
      ethereum.Value.fromAddress(validatorAdd)
    )
  )

  return validatorRegisteredEvent
}
