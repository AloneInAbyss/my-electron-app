export interface IElectronAPI {
  getUser: () => Promise<string>,
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}
