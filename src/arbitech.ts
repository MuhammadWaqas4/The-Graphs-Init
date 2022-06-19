import {
  Approval as ApprovalEvent,
  Transfer as TransferEvent
} from '../generated/Arbitech/Arbitech'

import {
  Approval,
  Transfer
} from '../generated/schema'

import { Bytes, BigInt } from '@graphprotocol/graph-ts'

import { loadOrCreateTransaction } from './utils/Transactions'

export function handleApproval(event: ApprovalEvent): void {
  let transaction = loadOrCreateTransaction(event.transaction, event.block);
  let entity = new Approval(transaction.id)
  entity.transaction = transaction.id
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let transaction = loadOrCreateTransaction(event.transaction, event.block);
  let entity = new Transfer(transaction.id)
  entity.transaction = transaction.id
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleTransferFrom(event: TransferEvent): void {
  let transaction = loadOrCreateTransaction(event.transaction, event.block);
  let entity = new Transfer(transaction.id)
  entity.transaction = transaction.id
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
