export const ActionsMessage = {
  UNAUTHORIZED: "Você não está autorizado a realizar esta ação.",

  SIGN_UP_FAILED: "Falha ao criar conta.",
  SIGN_IN_FAILED:
    "Falha ao entrar. Verifique suas credenciais e tente novamente.",

  TAG_CREATED_SUCCESS: "Tag criada com sucesso.",

  FILE_METADATA_NOT_FOUND: "Metadados do arquivo não encontrados.",
  FILE_METADATA_DELETED_SUCCESS: "Metadados do arquivo excluídos com sucesso.",
  FILE_METADATA_PREVIEW_URL_NOT_FOUND:
    "URL de pré-visualização dos metadados do arquivo não encontrados.",

  GENERIC_ERROR: "Ocorreu um erro inesperado. Tente novamente mais tarde.",

  REQUIRED_FILE: "Arquivo é obrigatório.",
  ALL_FIELDS_REQUIRED: "Todos os campos são obrigatórios.",
};

export const DatabaseOperationsMessage = {
  NO_DATA_INSERTED: "Nenhum dado foi inserido. Um erro ocorreu.",
};

export const AppMessages = {
  GENERIC_TOAST_SUCCESS: "Ação realizada com sucesso.",
  GENERIC_TOAST_ERROR: "Ocorreu um erro ao realizar a ação.",
};

export const DEFAULT_BUCKET_NAME = "athena-articles";

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export const ONE_HOUR_IN_SECONDS = 60 * 60;
