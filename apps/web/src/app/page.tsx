import { Text } from "ui";

export default function Home() {
  return (
    <main>
      {Array.from({ length: 10 }).map((_, i) => (
        <Text key={i}>OKKKK</Text>
      ))}
    </main>
  );
}
