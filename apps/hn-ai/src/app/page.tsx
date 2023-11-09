import {Button,cn} from "@payroll/ui"
export default function Home() {
  return (<>
  <div className="fixed top-0 left-0 backdrop-blur-xl w-full p-2 flex justify-between">
    <div className={cn("bg-rose-900 h-10 w-10 rounded-full ")}/>
    <div className={cn("bg-slate-600 h-10 w-10 rounded-full ")}/>
  </div>

  <div>
    {/* This is the card section in the page */}
  </div>

  <div>
    {/* This is the promp section on the page */}
  </div>
  </>
  );
}
