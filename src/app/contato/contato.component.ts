import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  contatoForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    mensagem: ['', [Validators.required, Validators.minLength(20)]],
    assunto: ['', [Validators.required, Validators.minLength(10)]],
    telefone: ['', [Validators.required, Validators.minLength(11)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  enviarFormulario() {
    alert('Formulário enviado com sucesso!');
    this.contatoForm.reset();
  }
}
