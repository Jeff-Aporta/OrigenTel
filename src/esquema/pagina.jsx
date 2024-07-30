function PaginaOrigenTel() {
    return esquemaGeneralLibreria(_ORIGEN_TEL_);
}

function LIDocTitulo({ children }) {
    if (Array.isArray(children)) {
        const titulo = children.shift();
        return (
            <LIDoc>
                <Typography variant="subtitle1">
                    <Resaltar>{titulo}:</Resaltar>
                </Typography>
                <Typography variant="subtitle2" style={{ marginLeft: "20px" }}>
                    <FormatoDoc>
                        {children}
                    </FormatoDoc>
                </Typography>
            </LIDoc>
        );
    }
    if (typeof children === 'string') {
        if (children.includes(":")) {
            const split = children.split(":");
            const titulo = split.shift();
            return (
                <LIDocTitulo>
                    {[
                        titulo,
                        split.join(":")
                    ]}
                </LIDocTitulo>
            );
        }
    }
    return <LiDoc>{children}</LiDoc>;
}