import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';


createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Almoço',
          type: 'withdraw',
          category: 'Comida',
          amount: 100,
          createdAt: new Date('2021-02-14 12:00:00'),
        },
        {
          id: 3,
          title: 'Jantar',
          type: 'withdraw',
          category: 'Comida',
          amount: 200,
          createdAt: new Date('2021-02-22 09:00:00'),
        },
        {
          id: 4,
          title: 'Aposta',
          type: 'deposit',
          category: 'SenXG2',
          amount: 50,
          createdAt: new Date('2021-09-10 09:00:00'),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })

    this.del('/transaction/:id', (schema, req) => {
      let id = req.params.id

      schema.find('transaction', id)?.destroy()

      return this.schema.all('transaction')
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

