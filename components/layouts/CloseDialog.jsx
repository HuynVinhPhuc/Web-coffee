"use client";
const CloseDialog = ({ show, message, title, confirm, cancel }) => {
  if (!show) {
    return <></>;
  }
  return (
    <div className="fixed inset-0 top-50 left-50 -translate-x-50 -translate-y-50 z-50 bg-gray-800 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[500px] bg-white max-w-full flex flex-col rounded-xl">
        <div className="flex flex-row justify-between mb-4 pt-2 px-5 rounded-t-xl bg-sky-400">
          <h1 className="text-2xl text-black">{title}</h1>
          <button
            onClick={cancel}
            className="mb-2 pb-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 hover:bg-red-700 text-white"
          >
            x
          </button>
        </div>
        <div className="px-5 py-6">
          <div className="text-lg">{message}</div>
          <div className="flex flex-row justify-end mt-2">
            <button
              onClick={cancel}
              className="bg-gray-400 mr-2 py-1 px-2 rounded border-none hover:bg-gray-500"
            >
              Huỷ
            </button>
            <button
              onClick={confirm}
              className="bg-green-500 py-1 px-2 rounded border-none hover:bg-green-600"
            >
              Xoá
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloseDialog;
