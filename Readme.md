# React - Conceitos

É biblioteca para construção de interfaces e para desenvolvimento de SPA (Single-Page Applications). Com o SPA, o back-end apenas retorna JSON e o front-end é quem controla as rotas e o consumo e renderização dos dados. Então as páginas da aplicação não precisam ser rotas no back-end. O roteamento da aplicação fica no front-end. Daí o conceito SPA - tudo fica em uma página só e por isso, o browser nunca recarrega. Há assim, formas de roteamento para alternar de uma página a outra sem recarregar o browser. Isso contribui para a performance e usabilidade.

Também, as regras de negócio, as integrações com funcionalidades de terceiros (como meios de pagamento) e o acesso ao banco de dados ficam a cargo do back-end (NodeJS) . 

O front-end apenas se responsabiliza pelo desenvolvimento da interface, ou seja, é apenas capaz de mostrar os dados. Ele não faz cálculos e não tem regras de negócio.

Com isso, podemos ter múltiplos clientes para apenas uma API. Aplicações mobile e web podem consumir uma mesma API, pois o back end não é responsável por retornar a parte visual da aplicação.

React é uma biblioteca mas, devido todo seu ecossistema (ReactJS, React Native, Redux, etc) e todas as ferramentas envolvidas com o React, podemos chamá-lo de framework.

Com React, tudo fica no Javascript (HTML, CSS, imagens, etc). Isso é possível pelo fato de que cada componente no React se torna uma função que retorna um código JSX (HTML, CSS e Javascript).

- JSX - Javascript = XML.

    Permite escrever a sintaxe do XML (HTML) dentro do Javascript e com o React é possível criar nossos próprios elementos HTML. Então com o JSX, o código HTML pode ser colocado dentro do retorno de uma função Javascript.

- Babel/webpack

    O browser não tem ainda tecnologia para entender o tipo de código desenvolvido com o React, pois tudo está sendo importado para dentro do Javascript.

    O Babel transpila(converte) o código do React em uma forma na qual o Browser entenda.

    O webpack cria o Bundle. O Bundle é um arquivo que contém todo o código da aplicação que o Babel compilou e o transforma em um único código que vai ser consumido pela aplicação. 

    O webpack converte o código de uma forma diferente para cada tipo de arquivo, e consequentemente, 'ensina' o Javascript sobre como importar arquivos diferentes como CSS, imagens, etc. 

    Dentro do webpack há os loaders para converter os diferentes tipos de arquivos.

- Nomenclatura

    React é a biblioteca que é utilizada no ReactJS e no React Native. 

    ReactJs é o comportamento do React no Browser

    React Native é a soma da biblioteca React com uma outra biblioteca que lida com elementos nativos.

### Componentização

Cada componente tem suas funcionalidades específicas. A aplicação total já é por si só um componente. Formulário, cabeçalho, listas, etc, tudo é componente e cada componente é independente, pois, suas específicas funcionalidades não interferem no restante da aplicação.

Ou seja, é possível criar um componente cada vez que a lógica de uma funcionalidade não interfira no restante do código da aplicação. Um componente, portanto, pode ser isolado dos outros sem que isso interfira na lógica da aplicação, Isso quer dizer que, se uma funcionalidade for retirada, e o restante da aplicação continuar funcionando, então o código dessa funcionalidade por der considerado um componente

 

Em React, o componente é uma função que retorna um HTML.

```jsx
    function App() {
			return <h1>Retorno</h1>
		}
```

Criamos componentes para reaproveitar código.

# Props (Propriedades)

É uma informação que pode ser passada de um componente pai para um componente filho.

As propriedades são passadas como parâmetro da função.

```jsx
    function Heade(props) {
			return (
				<header>
					<h1>{props.title}</h1>
				</header>
			)
		}
```

- Desestruturando as props:

    ```jsx
    function Heade({ title }) {
    			return (
    				<header>
    					<h1>{title}</h1>
    				</header>
    			)
    		}
    ```

- Propriedade children:

    Dentro das props há a propriedade children. Children é todo o conteúdo que a tag do componente pai recebeu, ou seja, serve para acessar todo o conteúdo do componente. É criada pelo próprio React.

    ```jsx
        function Heade({ title, children }) {
    			return (
    				<header>
    					<h1>{props.title}</h1>
    					{children}
    				</header>
    			)
    		}
    ```