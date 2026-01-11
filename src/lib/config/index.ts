/**
 * Configuration exports
 */

// Panel configuration
export {
	PANELS,
	NON_DRAGGABLE_PANELS,
	MAP_ZOOM_MIN,
	MAP_ZOOM_MAX,
	MAP_ZOOM_STEP,
	type PanelConfig,
	type PanelId
} from './panels';

// Feed configuration
export { FEEDS, INTEL_SOURCES, type FeedSource, type IntelSource } from './feeds';

// Keyword configuration
export {
	ALERT_KEYWORDS,
	REGION_KEYWORDS,
	TOPIC_KEYWORDS,
	containsAlertKeyword,
	detectRegion,
	detectTopics,
	type AlertKeyword
} from './keywords';

// Market configuration
export {
	SECTORS,
	COMMODITIES,
	INDICES,
	CRYPTO,
	type SectorConfig,
	type CommodityConfig
} from './markets';
