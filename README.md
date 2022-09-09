# teste-hox
CRUD com filtros e pesquisa

<h3> 
Instalar os módulos nas pastas /teste-hox e /teste-hox-api
</h3>

<code>
npm install
</code>

<h3>
Criar uma conexão no Mysql de acordo com o .env.example e renomeá-la para ".env"
</h3>
<h4>
 Executar as migrations
</h4>
<code>
 npx prisma migrate deploy
</code>
<br />
O comando abaixo já deve ter sido executado automaticamente junto com o acima, mas caso não... 
<br />
<code> 
npx prisma db seed
</code>
<h3>
Caso queira usar PostgreeSQL deve-se excluir as pasta migration e criá-las novamente após fazer as mudanças necessárias
</h3> 
deve-se excluir as pasta migration e criá-las novamente após fazer as mudanças necessárias no arquivo do prisma e no .env
<h3> <br />
<code> 
npx prisma migrate dev --name product_table_init
</ code>
Rodar Frontend
</h3>
<code>
npm run dev
  </code>
  <br />
 <h3>
 Rodar Backend
 </h3>
  <code>
npm run start
</code>
<br /> 
<br />
<h4>
 Credenciais
 </h4>
email: teste@hox.com
<br/>
senha: testehox123

OBS: a barra de pesquisa funciona onSubmit
