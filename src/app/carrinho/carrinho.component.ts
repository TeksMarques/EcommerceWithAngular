import { Component, OnInit } from '@angular/core';
import { IProdutoCarrinho } from '../produtos';
import { CarrinhoService } from '../carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  calculaTotal = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.getItens();
    this.calcularTotal();
  }

  calcularTotal() {
    this.calculaTotal = 0;
    this.itensCarrinho.forEach((item) => {
      this.calculaTotal += item.preco * item.quantidade;
    });
    return this.calculaTotal;
  }

  removerItem(itemId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(
      (item) => item.id !== itemId
    );
    this.carrinhoService.removerItem(itemId);
    this.calcularTotal();
  }

  finalizarCompra() {
    alert('Parabéns! Sua compra foi concluída com sucesso!');
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['/produtos']);
  }
}
