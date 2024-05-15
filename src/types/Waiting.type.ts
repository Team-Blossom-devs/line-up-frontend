export interface WaitingType {
  waitingStatus: "PENDING" | "WAITING" | "NOT-WAITING",
  time: number
  currentWaitingNumber?: number,
  headCount?: number,
  qrUrl?: string
}