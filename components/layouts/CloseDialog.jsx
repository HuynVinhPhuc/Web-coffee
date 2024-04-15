"use client";
const CloseDialog = ({ show, message, title, confirm, cancel }) => {
  if (!show) {
    return <></>;
  }
  return (
    <div className="fixed inset-0 top-50 left-50 -translate-x-50 -translate-y-50 z-50 bg-gray-800 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[500px] bg-white max-w-full flex flex-col rounded-xl h-52">
        <div className="flex flex-row justify-between mb-4 pt-2 px-5 rounded-t-xl bg-slate-100">
          <h1 className="text-2xl text-black font-semibold my-3">{title}</h1>
          <button
            onClick={cancel}
            className="my-2 pb-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold text-black hover:bg-gray-200 text-xl"
          >
            x
          </button>
        </div>
        <div className="px-5 py-5">
          <div className="text-lg">{message}</div>
          <div className="flex flex-row justify-end mt-8">
            <button
              onClick={cancel}
              className="bg-gray-500 text-white mr-2 py-1 px-5 rounded border-none hover:bg-gray-600"
            >
              Không
            </button>
            <button
              onClick={confirm}
              className="bg-blue-500 text-white py-1 px-5 rounded border-none hover:bg-blue-600"
            >
              Có
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloseDialog;
