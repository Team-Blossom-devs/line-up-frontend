export interface WaitingType {
  waitingId?: string;
  waitingStatus: "PENDING" | "WAITING" | "NOT-WAITING" | "DEPRECATED" | "NOT-FOUND",
  time: number
  currentWaitingNumber?: number,
  headCount?: number,
  qrUrl?: string
}