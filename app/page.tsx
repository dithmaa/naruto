"use client";
import { Container, Header, Title } from "@/components/shared";
import { Video } from "@/components/ui";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Video srcLink={"main-video"} />
      <Container>
        <main className="mt-10">
          <Title text="Персонажи" size="sm" className="mb-8 font-bold" />
        </main>
      </Container>
    </div>
  );
}
