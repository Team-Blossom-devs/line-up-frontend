export interface WaitingType {
  waitingId?: string;
  waitingStatus: "PENDING" | "WAITING" | "NOT-WAITING" | "EXPIRED" | "NOT-FOUND",
  time: number
  currentWaitingNumber?: number,
  headCount?: number,
  qrUrl?: string
}