export const PageNames = {
  MANAGE_CONTENT_PAGE: 'MANAGE_CONTENT_PAGE',
  MANAGE_PERMISSIONS_PAGE: 'MANAGE_PERMISSIONS_PAGE',
  USER_PERMISSIONS_PAGE: 'USER_PERMISSIONS_PAGE',
  DEVICE_INFO_PAGE: 'DEVICE_INFO_PAGE',
  DEVICE_SETTINGS_PAGE: 'DEVICE_SETTINGS_PAGE',
  REARRANGE_CHANNELS: 'REARRANGE_CHANNELS',
  DELETE_CHANNELS: 'DELETE_CHANNELS',
  EXPORT_CHANNELS: 'EXPORT_CHANNELS',
  MANAGE_TASKS: 'MANAGE_TASKS',
  MANAGE_CHANNEL: 'MANAGE_CHANNEL',
  SELECT_CONTENT: 'SELECT_CONTENT',
  NEW_CHANNEL_VERSION_PAGE: 'NEW_CHANNEL_VERSION_PAGE',
  AVAILABLE_CHANNELS_PAGE: 'AVAILABLE_CHANNELS',
  FACILITIES_PAGE: 'FACILITIES_PAGE',
  FACILITIES_TASKS_PAGE: 'FACILITIES_TASKS_PAGE',
};

export const ContentWizardPages = {
  AVAILABLE_CHANNELS: 'AVAILABLE_CHANNELS',
  LOADING_CHANNEL_METADATA: 'LOADING_CHANNEL_METADATA',
  SELECT_CONTENT: 'SELECT_CONTENT',
  SELECT_DRIVE: 'SELECT_DRIVE',
  SELECT_IMPORT_SOURCE: 'SELECT_IMPORT_SOURCE',
  SELECT_NETWORK_ADDRESS: 'SELECT_NETWORK_ADDRESS',
};

export const TaskTypes = {
  REMOTECHANNELIMPORT: 'kolibri.core.content.tasks.remotechannelimport',
  REMOTECONTENTIMPORT: 'kolibri.core.content.tasks.remotecontentimport',
  REMOTEIMPORT: 'kolibri.core.content.tasks.remoteimport',
  DISKCHANNELIMPORT: 'kolibri.core.content.tasks.diskchannelimport',
  DISKCONTENTIMPORT: 'kolibri.core.content.tasks.diskcontentimport',
  DISKIMPORT: 'kolibri.core.content.tasks.diskimport',
  DISKCONTENTEXPORT: 'kolibri.core.content.tasks.diskcontentexport',
  DISKEXPORT: 'kolibri.core.content.tasks.diskexport',
  DELETECHANNEL: 'kolibri.core.content.tasks.deletechannel',
  UPDATECHANNEL: 'kolibri.core.content.tasks.updatechannel',
  REMOTECHANNELDIFFSTATS: 'kolibri.core.content.tasks.remotechanneldiffstats',
  LOCALCHANNELDIFFSTATS: 'kolibri.core.content.tasks.localchanneldiffstats',
  SYNCDATAPORTAL: 'kolibri.core.auth.tasks.dataportalsync',
  SYNCPEERFULL: 'kolibri.core.auth.tasks.peerfacilitysync',
  SYNCPEERPULL: 'kolibri.core.auth.tasks.peerfacilityimport',
  DELETEFACILITY: 'kolibri.core.auth.tasks.deletefacility',
};

// identical to facility constants.js
export const TaskStatuses = Object.freeze({
  IN_PROGRESS: 'INPROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  QUEUED: 'QUEUED',
  SCHEDULED: 'SCHEDULED',
  CANCELED: 'CANCELED',
  CANCELING: 'CANCELING',
});

export const TransferTypes = {
  LOCALEXPORT: 'localexport',
  LOCALIMPORT: 'localimport',
  PEERIMPORT: 'peerimport',
  REMOTEIMPORT: 'remoteimport',
};

// maps to possible network applications that we import/export content from
export const ApplicationTypes = {
  KOLIBRI: 'kolibri',
  STUDIO: 'studio',
};

export const ContentWizardErrors = {
  INVALID_PARAMETERS: 'INVALID_PARAMETERS',
  CHANNEL_NOT_FOUND_ON_SERVER: 'CHANNEL_NOT_FOUND_ON_SERVER',
  CHANNEL_NOT_FOUND_ON_DRIVE: 'CHANNEL_NOT_FOUND_ON_DRIVE',
  CHANNEL_NOT_FOUND_ON_STUDIO: 'CHANNEL_NOT_FOUND_ON_STUDIO',
  KOLIBRI_STUDIO_UNAVAILABLE: 'KOLIBRI_STUDIO_UNAVAILABLE',
  DRIVE_IS_NOT_WRITEABLE: 'DRIVE_IS_NOT_WRITEABLE',
  DRIVE_NOT_FOUND: 'DRIVE_NOT_FOUND',
  DRIVE_ERROR: 'DRIVE_ERROR',
  TRANSFER_IN_PROGRESS: 'TRANSFER_IN_PROGRESS',
  TREEVIEW_LOADING_ERROR: 'TREEVIEW_LOADING_ERROR',
  NETWORK_LOCATION_DOES_NOT_EXIST: 'NETWORK_LOCATION_DOES_NOT_EXIST',
  NETWORK_LOCATION_UNAVAILABLE: 'NETWORK_LOCATION_UNAVAILABLE',
  NETWORK_LOCATION_DOES_NOT_HAVE_CHANNEL: 'NETWORK_LOCATION_DOES_NOT_HAVE_CHANNEL',
};

export const ErrorTypes = {
  CONTENT_DB_LOADING_ERROR: 'CONTENT_DB_LOADING_ERROR',
  TREEVIEW_LOADING_ERROR: 'TREEVIEW_LOADING_ERROR',
  CHANNEL_TASK_ERROR: 'CHANNEL_TASK_ERROR',
};

export const ContentSources = {
  LOCAL_DRIVE: 'local',
  KOLIBRI_STUDIO: 'network',
  PEER_KOLIBRI_SERVER: 'PEER_KOLIBRI_SERVER',
};

export const pageNameToModuleMap = {
  [PageNames.MANAGE_CONTENT_PAGE]: 'manageContent',
  [PageNames.MANAGE_PERMISSIONS_PAGE]: 'managePermissions',
  [PageNames.USER_PERMISSIONS_PAGE]: 'userPermissions',
  [PageNames.DEVICE_INFO_PAGE]: 'deviceInfo',
};

export const LandingPageChoices = {
  SIGN_IN: 'sign-in',
  LEARN: 'learn',
};
