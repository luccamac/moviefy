import { Component } from '@angular/core';

@Component({
    template: `
        <div class="jumbotron text-center">
            <h1> 404 Not Found </h1>
            <p> Está perdido? <a routerLink="/">Voltar para a página inicial</a></p>
        </div>
            `
})

export class NotFoundComponent { }