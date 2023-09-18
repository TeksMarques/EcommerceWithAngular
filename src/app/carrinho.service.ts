import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() {}

  getItens() {
    this.itens = JSON.parse(localStorage.getItem('carrinho') || '[]');
    return this.itens;
  }

  adicionarItem(item: IProdutoCarrinho) {
    this.itens.push(item);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  removerItem(itemId: number) {
    this.itens = this.itens.filter((item) => item.id !== itemId);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}
