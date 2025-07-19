import { ActionsMessage } from "@/constants";
import { ActionResult, NoDataActionResult } from "@/models";

export function createActionResultFromError<T>(
  error: unknown,
): ActionResult<T> {
  return {
    success: false,
    error:
      error instanceof Error ? error.message : ActionsMessage.GENERIC_ERROR,
    data: null,
  };
}

export function passThroughActionResultError<T = null>(
  actionResult: NoDataActionResult,
): ActionResult<T> {
  return {
    success: false,
    error: actionResult.error,
    data: null,
  };
}
