import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renderiza o texto passado como children", () => {
    render(<Button>Clique aqui</Button>);
    expect(screen.getByText("Clique aqui")).toBeInTheDocument();
  });

  it("aplica o estilo da variante primary por padrão", () => {
    render(<Button>Padrão</Button>);
    const button = screen.getByText("Padrão");
    expect(button.className).toContain("bg-blue-500");
  });

  it("aplica o estilo da variante secondary quando especificado", () => {
    render(<Button variant="secondary">Secundário</Button>);
    const button = screen.getByText("Secundário");
    expect(button.className).toContain("bg-gray-200");
  });

  it("dispara o evento onClick quando clicado", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clicável</Button>);
    fireEvent.click(screen.getByText("Clicável"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("repassa outras props nativas do botão, como disabled", () => {
    render(<Button disabled>Desabilitado</Button>);
    expect(screen.getByText("Desabilitado")).toBeDisabled();
  });
});
