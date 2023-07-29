import i18n from 'i18next';
import { DEFAULT_REGEX_EXP } from '@constants/regex';
import { ICreateRecipeContentBlock, ICreateRecipeIngredient, ICreateRecipeMain } from '@src/types/createRecipe.types';
import { getNotification } from '@src/notification/notifications';
import { CONTENT_BLOCK_TYPES } from '@constants/contentBlocks';

const { t } = i18n;

function createRecipeMainTitleValidation(str: string): Record<string, string> {
  const errors: Record<string, string> = {};

  if (str === '') {
    errors.title = t('requiredField');
    return errors;
  }

  if (!DEFAULT_REGEX_EXP.test(str)) {
    errors.title = t('incorrectValue');
    return errors;
  }

  if (str.length < 5) {
    errors.title = t('atLeast', { value: 5 });
    return errors;
  }

  if (str.length > 80) {
    errors.title = t('lessThan', { value: 80 });
    return errors;
  }
  return {};
}

function createRecipeMainDescriptionValidation(str: string): Record<string, string> {
  const errors: Record<string, string> = {};

  if (str === '') {
    errors.description = t('requiredField');
    return errors;
  }

  if (!DEFAULT_REGEX_EXP.test(str)) {
    errors.description = t('incorrectValue');
    return errors;
  }

  if (str.length < 20) {
    errors.description = t('atLeast', { value: 20 });
    return errors;
  }

  if (str.length > 1500) {
    errors.description = t('lessThan', { value: 1500 });
    return errors;
  }
  return errors;
}

function createRecipeMainCategoryValidation(str: string): Record<string, string> {
  const errors: Record<string, string> = {};
  
  if (str === '') {
    errors.category = t('requiredField');
    return errors;
  }
  
  if (!DEFAULT_REGEX_EXP.test(str)) {
    errors.category = t('incorrectValue');
    return errors;
  }

  return errors;
}

function createRecipeMainInfoPhotoValidation(photo: Blob | MediaSource | null): Record<string, string> {
  const errors: Record<string, string> = {};
  
  if (!photo) {
    errors.photo = t('requiredField');
    return errors;
  }
  return errors;
}

export function createRecipeMainInfoValidation(mainInfo: ICreateRecipeMain): Record<string, string> {
  const titleValidation: Record<string, string> = createRecipeMainTitleValidation(mainInfo.title);
  const descriptionValidation: Record<string, string> = createRecipeMainDescriptionValidation(mainInfo.description);
  const categoryValidation: Record<string, string> = createRecipeMainCategoryValidation(mainInfo.category);
  const photoValidation: Record<string, string> = createRecipeMainInfoPhotoValidation(mainInfo.photo);
  
  return {
    ...categoryValidation,
    ...titleValidation,
    ...descriptionValidation,
    ...photoValidation,
  };
}

export function createRecipeIngredientValidation(str: string): Record<string, string> {
  const errors: Record<string, string> = {};

  if (str === '') {
    errors.ingredients = t('requiredField');
    return errors;
  }

  if (!DEFAULT_REGEX_EXP.test(str)) {
    errors.ingredients = t('incorrectValue');
    return errors;
  }

  if (str.length < 2) {
    errors.ingredients = t('atLeast', { value: 2 });
    return errors;
  }

  if (str.length > 50) {
    errors.ingredients = t('lessThan', { value: 50 });
    return errors;
  }
  return errors;
}

function createRecipeContentBlockTitleValidation(str: string): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!str) {
    return errors;
  }

  if (!DEFAULT_REGEX_EXP.test(str)) {
    errors.title = t('incorrectValue');
    return errors;
  }

  if (str.length > 100) {
    errors.title = t('lessThan', { value: 100 });
    return errors;
  }
  return {};
}

function createRecipeContentBlockDescriptionValidation(str: string): Record<string, string> {
  const errors: Record<string, string> = {};

  if (str === '') {
    errors.description = t('requiredField');
    return errors;
  }

  if (!DEFAULT_REGEX_EXP.test(str)) {
    errors.description = t('incorrectValue');
    return errors;
  }

  if (str.length < 50) {
    errors.description = t('atLeast', { value: 50 });
    return errors;
  }

  if (str.length > 5000) {
    errors.description = t('lessThan', { value: 1500 });
    return errors;
  }

  return errors;
}

export function createRecipeTextBlockTotalValidation(content: ICreateRecipeContentBlock['content']): Record<string, string> {
  const titleValidation: Record<string, string> = createRecipeContentBlockTitleValidation(content.title);
  const descriptionValidation: Record<string, string> = createRecipeContentBlockDescriptionValidation(content.description);

  return {
    ...titleValidation,
    ...descriptionValidation,
  };
}

function createRecipeContentBlockPhotoDescriptionValidation(str: string): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!str) {
    return errors;
  }

  if (!DEFAULT_REGEX_EXP.test(str)) {
    errors.photoDescription = t('incorrectValue');
    return errors;
  }

  if (str.length > 50) {
    errors.photoDescription = t('lessThan', { value: 50 });
    return errors;
  }
  return {};
}

export function createRecipePhotoTextBlockTotalValidation(content: ICreateRecipeContentBlock['content']): Record<string, string> {
  const titleValidation: Record<string, string> = createRecipeContentBlockTitleValidation(content.title);
  const descriptionValidation: Record<string, string> = createRecipeContentBlockDescriptionValidation(content.description);
  const photoDescriptionValidation: Record<string, string> = createRecipeContentBlockPhotoDescriptionValidation(content.photoDescription);

  return {
    ...titleValidation,
    ...descriptionValidation,
    ...photoDescriptionValidation,
  };
}

export function createRecipePhotoBlockTotalValidation(content: ICreateRecipeContentBlock['content']): Record<string, string> {
  const photoDescriptionValidation: Record<string, string> = createRecipeContentBlockPhotoDescriptionValidation(content.photoDescription);

  return {
    ...photoDescriptionValidation,
  };
}

export function contentBlockValidation(contentBlock: ICreateRecipeContentBlock): Record<string, string> {
  let errors = {};

  if (contentBlock.type === CONTENT_BLOCK_TYPES.TEXT) {
    errors = createRecipeTextBlockTotalValidation(contentBlock.content);
    return errors;
  }

  if (contentBlock.type === CONTENT_BLOCK_TYPES.PHOTO_TEXT) {
    errors = createRecipePhotoTextBlockTotalValidation(contentBlock.content);
    return errors;
  }

  if (contentBlock.type === CONTENT_BLOCK_TYPES.PHOTO) {
    errors = createRecipePhotoBlockTotalValidation(contentBlock.content);
    return errors;
  }

  return errors;
}

export function createRecipeFullFormValidate(
  mainInfo: ICreateRecipeMain,
  ingredients: ICreateRecipeIngredient[],
  contentBlocks: ICreateRecipeContentBlock[],
): boolean {
  const mainInfoValidate = createRecipeMainInfoValidation(mainInfo);
  if (Object.values(mainInfoValidate).length > 0) {
    getNotification(`${t('errorIn', { value: t('mainInfo') })}`, 'error');
    return false;
  }

  const ingredientsValidate = ingredients.map((item) => {
    return Object.values(createRecipeIngredientValidation(item.value)).length > 0;
  });

  if (ingredientsValidate.includes(true)) {
    getNotification(`${t('errorIn', { value: `${t('ingredient')} #${ingredientsValidate.indexOf(true) + 1}` })}`, 'error');
    return false;
  }

  if (contentBlocks.length < 2) {
    getNotification(t('atLeast2ContentBlocks'), 'error');
    return false;
  }

  const contentBlocksValidate: boolean[] = contentBlocks.map((item) => {
    return Object.values(contentBlockValidation(item)).length > 0;
  });

  if (contentBlocksValidate.includes(true)) {
    getNotification(`${t('errorIn', { value: `${t('contentBlockNumber', { value: contentBlocksValidate.indexOf(true) + 1 })}` })}`, 'error');
    return false;
  }

  return true;
}
