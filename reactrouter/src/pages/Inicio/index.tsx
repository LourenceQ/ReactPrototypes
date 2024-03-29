import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import Menu from 'components/Menu';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Cardapio } from 'types/Prato';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];

  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0,3);
  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato: Cardapio[0]) {
    navigate(`/prato/${prato.id}`, {state: {prato}, replace: true});
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Recomendações da cozinha
      </h3>

      <div className={styles.recomendados}>

        {pratosRecomendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>

            <button 
              onClick={() => redirecionarParaDetalhes(item)}
              className={styles.recomendado__botao}>
              Ver mais
            </button>

          </div>

        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa Casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do Lawrence"/>
        <div className={styles.nossaCasa__endereco}>
          Rua Lawrence. 111, Canis <br /> <br />Brasil
        </div>
      </div>
    </section>
  );
}