import { getNames } from "./action";

export default async function Home() {
  const result = await getNames();
  console.log("result", result);
  return (
    <section>
      <h1>Hello world</h1>
    </section>
  );
}
