export class LocalStorageUtils {
    
    public obterUsuario() {
        return JSON.parse(localStorage.getItem('medcare.usuario'));
    }

    public salvarDadosLocaisUsuario(response: any) {
        console.log(response);
        this.salvarTokenUsuario(response.token);
        this.salvarUsuario(response.usuario);
    }

    public limparDadosLocaisUsuario() {
        localStorage.removeItem('medcare.token');
        localStorage.removeItem('medcare.usuario');
    }

    public obterTokenUsuario(): string {
        return localStorage.getItem('medcare.token');
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('medcare.token', token);
    }

    public salvarUsuario(user: string) {
        localStorage.setItem('medcare.usuario', JSON.stringify(user));
    }

}