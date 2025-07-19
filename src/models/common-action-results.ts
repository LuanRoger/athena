import { ActionsMessage } from "@/constants";
import { EmptyResult } from "./empty-result";

export const UnauthorizedActionResult: EmptyResult = {
  success: false,
  error: ActionsMessage.UNAUTHORIZED,
  data: null,
} as const;
