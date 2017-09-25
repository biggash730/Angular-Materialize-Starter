import * as toast from "toastr/toastr"

export class Toast {
    static success(message: string) {
        this.clear();
        toast.success(message);
    }

    static error(message: string, title?: string) {
        this.clear();
        toast.error(message, title, { timeOut: 0, extendedTimeOut: 0 });
    }

    static info(message: string) {
        this.clear();
        toast.info(message);
    }

    static warning(message: string) {
        this.clear();
        toast.warning(message);
    }

    static show(message: string, success: boolean) {
        success ? this.success(message) : this.error(message);
    }

    static clear() {
        toast.clear()
    }
}