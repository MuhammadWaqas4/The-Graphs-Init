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

export function handleApproval(event: Approval): void {}
export function handleTransfer(event: Transfer): void {}
