"use client";

import { Button, Input, Card } from "@repo/ui";

export default function Home() {
  return (
    <div className="p-8 max-w-md mx-auto flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Bem-vindo ao meu Monorepo Loop!</h1>
      <p>Este e o seu aplicativo Next.js consumindo componentes do pacote UI.</p>

      <Card title="Formulario de exemplo">
        <div className="flex flex-col gap-3">
          <Input label="Nome" placeholder="Digite seu nome" />
          <Input label="Email" type="email" placeholder="Digite seu email" />
          <div className="flex gap-2">
            <Button onClick={() => alert("Clicou!")}>Clique aqui</Button>
            <Button variant="secondary">Botao secundario</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
