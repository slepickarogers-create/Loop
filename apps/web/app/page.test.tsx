import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./page";

describe("Home", () => {
  it("renderiza o título e a descrição", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: "Bem-vindo ao meu Monorepo Loop!" })).toBeInTheDocument();
    expect(screen.getByText(/consumindo componentes/i)).toBeInTheDocument();
  });

  it("renderiza o Card com o título de formulário", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: "Formulario de exemplo" })).toBeInTheDocument();
  });

  it("renderiza os dois inputs com seus labels", () => {
    render(<Home />);
    expect(screen.getByLabelText("Nome")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("renderiza os dois botões", () => {
    render(<Home />);
    expect(screen.getByRole("button", { name: "Clique aqui" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Botao secundario" })).toBeInTheDocument();
  });

  it("chama alert ao clicar no botão principal", async () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    const user = userEvent.setup();
    render(<Home />);

    await user.click(screen.getByRole("button", { name: "Clique aqui" }));

    expect(alertMock).toHaveBeenCalledWith("Clicou!");
    alertMock.mockRestore();
  });
});
