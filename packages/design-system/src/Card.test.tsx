import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renderiza o título quando a prop é passada", () => {
    render(<Card title="Meu Título"><p>Conteúdo</p></Card>);
    expect(screen.getByRole("heading", { name: "Meu Título" })).toBeInTheDocument();
  });

  it("não renderiza nenhum título quando a prop não é passada", () => {
    render(<Card><p>Conteúdo</p></Card>);
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  it("renderiza os children corretamente", () => {
    render(<Card title="Título"><p>Texto de exemplo</p></Card>);
    expect(screen.getByText("Texto de exemplo")).toBeInTheDocument();
  });

  it("renderiza múltiplos children", () => {
    render(
      <Card title="Formulário">
        <span>Campo 1</span>
        <span>Campo 2</span>
      </Card>
    );
    expect(screen.getByText("Campo 1")).toBeInTheDocument();
    expect(screen.getByText("Campo 2")).toBeInTheDocument();
  });

  it("renderiza título e children juntos, na ordem correta", () => {
    render(<Card title="Cabeçalho"><p>Corpo</p></Card>);
    const card = screen.getByText("Cabeçalho").closest("div");
    expect(card).toHaveTextContent("Cabeçalho");
    expect(card).toHaveTextContent("Corpo");
  });
});
