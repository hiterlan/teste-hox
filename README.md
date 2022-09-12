# teste-hox
CRUD com filtros e pesquisa

<h3> 
1 - Instalar os módulos nas pastas /teste-hox e /teste-hox-api
</h3>

<code>
npm install
</code>

<h3>
2.1 - Criar uma conexão no Mysql de acordo com o .env.example e renomeá-la para ".env"
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
2.2 - Caso queira usar PostgreeSQL
</h3> 
deve-se excluir as pasta migrations e criá-la novamente após fazer as mudanças necessárias no arquivo do prisma e no .env
<br />
<code> 
npx prisma migrate dev --name product_table_init
</code>
<br />
Em ambos os casos no final deve-se executar <br/>
<code>
prisma generate
</code>
<h3> 
3.1 - Rodar Frontend
</h3>
<code>
npm run dev
  </code>
  <br />
 <h3>
3.2 - Rodar Backend
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
