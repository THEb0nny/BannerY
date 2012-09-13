<?php
$modx->addPackage('bannerx', $modx->getOption('core_path').'components/bannerx/model/');
$modx->lexicon->load('bannerx:default');

$limit = $modx->getOption('limit', $scriptProperties, 5);
$sortdir = $modx->getOption('sortdir', $scriptProperties, 'ASC');
$sortby = $modx->getOption('sortby', $scriptProperties, 'RAND()');
$tpl = $modx->getOption('tpl', $scriptProperties, 'bxAd');
$position = $modx->getOption('position', $scriptProperties, 0);
$output = '';

if($position > 0) {
	$c = $modx->newQuery('bxAd');
	$c->select('bxAd.id AS id, bxAd.name AS name, bxAd.image AS image, bxAd.url AS url, pos.id AS adposition, pos.idx AS idx');
	$c->leftJoin('bxAdPosition', 'pos', 'pos.ad=bxAd.id');
	$c->where(array(
					'bxAd.active' => 1,
					'pos.position' => $position
			  )
	);
	if($sortby == 'RAND()') {
		$c->sortby('RAND()');
	}    
	else if($sortby == 'idx' || $sortby == 'index') {
		$c->sortby('pos.idx', $sortdir);
	}
	else {
		$c->sortby('bxAd.'.$sortby, $sortdir);
	}
	$c->limit($limit);

	$ads = $modx->getCollection('bxAd', $c);
	foreach($ads as $ad) {
		$ad = $ad->toArray();
		$output .= $modx->getChunk($tpl, $ad);
	}
}
return $output;
