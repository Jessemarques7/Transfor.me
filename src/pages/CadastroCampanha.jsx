import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { ErrorMessage } from "../components/ErrorMessage";

// Styled Components
const PageWrapper = styled.div`
  display: flex;

  font-family: Arial, sans-serif;
`;

const LeftPanel = styled.div`
  flex: 1;
  background-color: #f8f7ec;
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  a {
    text-decoration: none;
  }

  h1 {
    color: #00c851;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  div {
    margin-top: 100px;
    text-align: center;
    h3 {
      color: #666;
    }
    p {
      color: #555;
    }
  }
`;

const RightPanel = styled.div`
  flex: 2;
  background-color: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #333;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  div {
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;

  &:focus {
    border-color: #00c851;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 30px;

  &:hover {
    background-color: #333;
  }
`;

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senhas não coincidem"),
  dob: yup
    .date("Data de nascimento precisa ser uma data válida")
    .required("Data de nascimento é obrigatória")
    .typeError("Data de nascimento precisa ser uma data válida"),
  cep: yup.string().required("CEP é obrigatório"),
  city: yup.string().required("Cidade é obrigatória"),
  state: yup.string().required("Estado é obrigatório"),
  street: yup.string().required("Rua é obrigatória"),
  neighborhood: yup.string().required("Bairro é obrigatório"),
  complement: yup.string().required("Complemento é obrigatório"),
  number: yup.string().required("Número de telefone é obrigatório"),
});

function CadastroCampanha() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  async function getCep() {
    const cep = getValues("cep");

    if (!!cep && !errors.cep?.message) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const json = await response.json();
        if (json) {
          setValue("street", json.logradouro);
          setValue("neighborhood", json.bairro);
          setValue("city", json.localidade);
          setValue("state", json.estado);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <PageWrapper>
      {/* Left Panel */}
      <LeftPanel>
        <NavLink to={"/"}>
          <h1>transfor.me</h1>
        </NavLink>
        <div>
          <h3>Vamos começar sua jornada </h3>
          <p>Cadastre-se para começar a apoiar ou montar sua campanha</p>
        </div>
      </LeftPanel>

      {/* Right Panel */}
      <RightPanel>
        <h2>Pessoal</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Pessoal Section */}
          <Row>
            <div>
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Teste exemplo"
                {...register("name")}
              />
              {!!errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </div>
            <div>
              <Label htmlFor="dob">Data de nascimento</Label>
              <Input id="dob" type="date" {...register("dob")} />
              {!!errors.dob && (
                <ErrorMessage>{errors.dob.message}</ErrorMessage>
              )}
            </div>
          </Row>

          <SectionTitle>Conta</SectionTitle>
          {/* Conta Section */}
          <Row>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Teste exemplo"
                {...register("email")}
              />
              {!!errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </div>
          </Row>
          <Row>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                {...register("password")}
              />
              {!!errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirmar senha</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="********"
                {...register("confirmPassword")}
              />
              {!!errors.confirmPassword && (
                <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
              )}
            </div>
          </Row>

          <SectionTitle>Endereço</SectionTitle>
          {/* Endereço Section */}
          <Row>
            <div>
              <Label htmlFor="cep">CEP</Label>
              <Input
                id="cep"
                type="text"
                placeholder="19199-191"
                {...register("cep")}
                onBlur={getCep}
              />
              {!!errors.cep && (
                <ErrorMessage>{errors.cep.message}</ErrorMessage>
              )}
            </div>
          </Row>
          <Row>
            <div>
              <Label htmlFor="city">Cidade</Label>
              <Input
                id="city"
                type="text"
                placeholder="Teste exemplo"
                {...register("city")}
              />
              {!!errors.city && (
                <ErrorMessage>{errors.city.message}</ErrorMessage>
              )}
            </div>
            <div>
              <Label htmlFor="state">Estado</Label>
              <Input
                id="state"
                type="text"
                placeholder="São Paulo"
                {...register("state")}
              />
              {!!errors.state && (
                <ErrorMessage>{errors.state.message}</ErrorMessage>
              )}
            </div>
          </Row>
          <Row>
            <div>
              <Label htmlFor="street">Rua</Label>
              <Input
                id="street"
                type="text"
                placeholder="José Da Silva Cunha"
                {...register("street")}
              />
              {!!errors.street && (
                <ErrorMessage>{errors.street.message}</ErrorMessage>
              )}
            </div>
          </Row>
          <Row>
            <div>
              <Label htmlFor="neighborhood">Bairro</Label>
              <Input
                id="neighborhood"
                type="text"
                placeholder="Bairro"
                {...register("neighborhood")}
              />
              {!!errors.neighborhood && (
                <ErrorMessage>{errors.neighborhood.message}</ErrorMessage>
              )}
            </div>
            <div>
              <Label htmlFor="complement">Complemento</Label>
              <Input
                id="complement"
                type="text"
                placeholder="Vila do Bairro"
                {...register("complement")}
              />
              {!!errors.complement && (
                <ErrorMessage>{errors.complement.message}</ErrorMessage>
              )}
            </div>
          </Row>

          <Row>
            <div>
              <Label htmlFor="street">Número de telefone</Label>
              <Input
                id="number"
                type="text"
                placeholder="Número de telefone"
                {...register("number")}
              />
              {!!errors.number && (
                <ErrorMessage>{errors.number.message}</ErrorMessage>
              )}
            </div>
          </Row>
          <div>
            <SubmitButton type="submit">Cadastrar</SubmitButton>
          </div>
        </Form>
      </RightPanel>
    </PageWrapper>
  );
}

export default CadastroCampanha;
