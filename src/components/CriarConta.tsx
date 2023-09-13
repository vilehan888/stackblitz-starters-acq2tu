import { FormEvent, useState } from 'react';
import styles from './Login.module.css';
import { Link , useNavigate} from 'react-router-dom';
import { auth, singIn } from '../services/firebase';
import {  createUser } from '../services/firebase';

export default function CriarConta() {
  const [usuario, setUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const nav = useNavigate();

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    createUser(usuario, senha)
      .then(() => {
        alert('Conta Criada! Agora você pode fazer o Login! ');
        nav("/login")
      })
      .catch((error) => {
        alert('Não possivel criar sua conta!' + error.message);
      });
  }

  return (
    <>
    <div className={styles.loginContainer}>
      <h1 className="teste">Login</h1>
      <form onSubmit={handleLogin} className={styles.formContainer}>
        <div>
          <div>
            <label htmlFor="userName">Usuario: </label>
          </div>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <div>
            <label htmlFor="userPassword">Senha: </label>
          </div>
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.acessButton}>
          Criar minha conta
        </button>
        <div>
            Já tem conta?
            <Link to="/login">
              <button>Que tal fazer login!</button>
          <Link />
        </div>
      <>
      <Link to="/">Ir para a home</Link>
  );
)