import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { ErrorMessage } from "./ErrorMessage";

// Styled Components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  font-family: Arial, sans-serif;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #777;
  text-align: center;
  margin-bottom: 40px;
`;

const Form = styled.form`
  max-width: 920px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputRow = styled.div`
  display: flex;
  div {
    width: 100%;
  }
  gap: 20px;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  resize: none;
  min-height: 220px;

  &:focus {
    border-color: #007bff;
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
  margin-top: 20px;
  text-transform: uppercase;

  &:hover {
    background-color: #333;
  }

   {
    background-color: gray;
  }
`;

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  subject: yup.string().required("Assunto é obrigatório"),
  message: yup.string().required("Mensagem é obrigatória"),
});

function FaleConosco() {
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(`Agradeçemos o contato, ${data.name}! Logo entraremos em contato`);
  };

  return (
    <PageWrapper>
      <Title>Fale conosco</Title>
      <Subtitle>
        Adoramos ouvir suas ideias, dúvidas e sugestões! <br /> Nossa equipe
        está aqui para ajudar você com o que precisar.
      </Subtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputRow>
          <div>
            <Label htmlFor="name">Seu Nome</Label>
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
            <Label htmlFor="email">Seu Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="testes@teste.com"
              {...register("email")}
            />

            {!!errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>
        </InputRow>
        <div>
          <Label htmlFor="subject">Sobre o que gostaria de falar</Label>
          <Input
            id="subject"
            type="text"
            placeholder="Sugestão sobre disponibilidade dos projetos"
            {...register("subject")}
          />

          {!!errors.subject && (
            <ErrorMessage>{errors.subject.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Label htmlFor="message">Mensagem</Label>
          <TextArea
            id="message"
            rows="5"
            placeholder="Mensagem de exemplo"
            {...register("message")}
          />

          {!!errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}
        </div>
        <SubmitButton type="submit" disabled={!isDirty || !isDirty}>
          Enviar mensagem
        </SubmitButton>
      </Form>
    </PageWrapper>
  );
}

export default FaleConosco;
