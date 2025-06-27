import { checkAIAvailability } from "@/lib/ai";

export default async function EnvCard() {
  const result = await checkAIAvailability();
  return !result && (
    <div className="absolute inset-0 top-10 left-0 right-0 flex items-center justify-center w-md">
      <div className="bg-blue-500 text-slate-50 rounded shadow-md p-2 leading-tight">
        <h2 className="text-sm font-bold">Heads up!</h2>
        <p className="text-xs flex flex-col">
          <span>You need to add OPENAI_API_KEY to the Frontend project settings.</span>
        </p>
      </div>
    </div>
  );
}
