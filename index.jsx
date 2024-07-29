ReactDOM.render(
    <div className="esquema-principal">
        <div className="contenedor-pagina">
            <EnvolventePagina>
                <PaginaOrigenTel />
            </EnvolventePagina>
        </div>
    </div>,
    document.querySelector('body')
);

setTimeout(() => {
    PR.prettyPrint();
}, 0);