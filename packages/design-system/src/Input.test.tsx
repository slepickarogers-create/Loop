import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("renderiza o label quando a prop é passada", () => {
    render(<Input label="Nome" id="nome" />);
    expect(screen.getByText("Nome")).toBeInTheDocument();
  });

  it("não renderiza nenhum label quando a prop não é passada", () => {
    render(<Input id="sem-label" />);
    expect(screen.queryByText(/./)).not.toBeInTheDocument();
  });

  it("associa o label ao input corretamente via htmlFor e id", () => {
    render(<Input label="Email" id="email" />);
    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("id", "email");
  });

  it("repassa props nativas do input, como placeholder e value", () => {
    render(<Input label="Nome" id="nome" placeholder="Digite seu nome" value="Rogers" onChange={() => {}} />);
    const input = screen.getByPlaceholderText("Digite seu nome");
    expect(input).toHaveValue("Rogers");
  });

  it("dispara o evento onChange quando o valor é alterado", () => {
    const handleChange = vi.fn();
    render(<Input label="Nome" id="nome" onChange={handleChange} />);
    fireEvent.change(screen.getByLabelText("Nome"), { target: { value: "Novo valor" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("repassa o atributo disabled", () => {
    render(<Input label="Nome" id="nome" disabled />);
    expect(screen.getByLabelText("Nome")).toBeDisabled();
  });
});
