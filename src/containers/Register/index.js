import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import CodeLogo from '../../assets/codeburger-logo.svg'
import RegisterImage from '../../assets/register-img.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import {
  Container,
  RegisterImg,
  ContainerItens,
  Label,
  Input,
  SingUpLink,
  ErrorMessage
} from './styles'

function Login() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos'),

    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        {
          validateStatus: () => true
        }
      )
      if (status === 200 || status === 201) {
        toast.success('Cadastro criado com sucesso')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente')
    }
  }

  return (
    <Container>
      <RegisterImg src={RegisterImage} />
      <ContainerItens>
        <img src={CodeLogo} />

        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            error={errors.name?.message}
            type="text"
            {...register('name')}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            error={errors.email?.message}
            type="email"
            {...register('email')}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            error={errors.password?.message}
            type="password"
            {...register('password')}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            error={errors.confirmPassword?.message}
            type="password"
            {...register('confirmPassword')}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 15, marginBottom: 25 }}>
            Sign In
          </Button>
        </form>

        <SingUpLink>
          Já possui conta?{' '}
          <Link style={{ color: 'white' }} to="/login">
            Sign In
          </Link>
        </SingUpLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
