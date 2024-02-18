import { XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import cx from "classnames";
import { toast } from "react-hot-toast";
import type { Toast } from "react-hot-toast";
import { Status } from "~/models/status.interface";

export interface Props {
  t: Toast;
  status: Status;
  title?: string;
  description?: string;
}
function ToastTailwind({ t, status, title, description }: Props) {
  return (
    <div className={`${t.visible ? "animate-enter" : "animate-leave"} pointer-events-auto flex w-full max-w-md rounded-xl shadow-lg`}>
      <div
        className={cx("flex w-full justify-between rounded-xl px-[26px] py-[18px]", {
          "bg-success-02": status === Status.SUCCESS,
          "bg-error-02": status === Status.FAIL,
        })}
      >
        <div className="flex items-start space-x-3">
          <CheckCircleIcon className="h-6 w-6 text-white" />
          <div className="flex flex-col space-y-1">
            <span className="text-sm font-bold text-white">{title}</span>
            <span className="text-xs font-medium text-neutral-200">{description}</span>
          </div>
        </div>
        <button onClick={() => toast.dismiss(t.id)} className="bg-transparent border-none">
          <XMarkIcon className="h-5 w-5 text-neutral-300" />
        </button>
      </div>
    </div>
  );
}

export default ToastTailwind;
