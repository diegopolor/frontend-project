export interface Novedades { 
    id: number,
    fecha: string,
    hora: string ,
    unidad:string,
    clave: string,
    origen: string,
    prioridad: number,
    descripcion?: string,
    observacion?: string,
    gestion?: string,
    fecha_gestion?: string
    hora_gestion?: string
}
  
export interface headersCount {
    [key: string]: any,
    Importante: number | undefined
    Rutinario?: number | undefined
    Historial?: number | undefined
}

  
export interface obsType  {
    id: number,
    obs: string,
    len: number
}

export interface User {
    id: number | undefined
    usuario: string | undefined
    rol: string | undefined
    token: string | undefined
    clave: string | undefined
}
  