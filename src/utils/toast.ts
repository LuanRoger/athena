import { AppMessages } from "@/constants";
import { NoDataActionResult } from "@/models";
import { toast } from "sonner";

export function showSuccessToast(message: string) {
  toast.success(message);
}

export function showInfoToast(message: string) {
  toast(message);
}

export function showErrorToast(message: string) {
  toast.error(message);
}

export function showToastByActionResult(
  result: NoDataActionResult,
  showSuccess = true,
  showError = true,
) {
  if (result.success && showSuccess) {
    toast.success(result.successMessage ?? AppMessages.GENERIC_TOAST_SUCCESS);
  } else if (!result.success && showError) {
    toast.error(result.error ?? AppMessages.GENERIC_TOAST_ERROR);
  }
}
