<script lang="ts">
	/*
	 * Specifically for just analytics to be across all pages
	 *
	 *
	 * */
	let { children } = $props();
</script>

<svelte:head>
	<!-- Meta Pixel Code -->
	<script>
		!(function (f, b, e, v, n, t, s) {
			if (f.fbq) return;
			n = f.fbq = function () {
				n.callMethod
					? n.callMethod.apply(n, arguments)
					: n.queue.push(arguments);
			};
			if (!f._fbq) f._fbq = n;
			n.push = n;
			n.loaded = !0;
			n.version = '2.0';
			n.queue = [];
			t = b.createElement(e);
			t.async = !0;
			t.src = v;
			s = b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t, s);
		})(
			window,
			document,
			'script',
			'https://connect.facebook.net/en_US/fbevents.js'
		);
		fbq('init', '1000222568931697');
		fbq('track', 'PageView');
	</script>
	<noscript>
		<img
			height="1"
			width="1"
			style="display:none"
			src="https://www.facebook.com/tr?id=1000222568931697&ev=PageView&noscript=1"
		/>
	</noscript>
	<!-- End Meta Pixel Code -->
	<script>
		!(function (t, e) {
			var o, n, p, r;
			e.__SV ||
				((window.posthog = e),
				(e._i = []),
				(e.init = function (i, s, a) {
					function g(t, e) {
						var o = e.split('.');
						2 == o.length && ((t = t[o[0]]), (e = o[1])),
							(t[e] = function () {
								t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
							});
					}
					((p = t.createElement('script')).type = 'text/javascript'),
						(p.crossOrigin = 'anonymous'),
						(p.async = !0),
						(p.src =
							s.api_host.replace('.i.posthog.com', '-assets.i.posthog.com') +
							'/static/array.js'),
						(r = t.getElementsByTagName('script')[0]).parentNode.insertBefore(
							p,
							r
						);
					var u = e;
					for (
						void 0 !== a ? (u = e[a] = []) : (a = 'posthog'),
							u.people = u.people || [],
							u.toString = function (t) {
								var e = 'posthog';
								return (
									'posthog' !== a && (e += '.' + a), t || (e += ' (stub)'), e
								);
							},
							u.people.toString = function () {
								return u.toString(1) + '.people (stub)';
							},
							o =
								'init me ws ys ps bs capture je Di ks register register_once register_for_session unregister unregister_for_session Ps getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Es $s createPersonProfile Is opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing Ss debug xs getPageViewId captureTraceFeedback captureTraceMetric'.split(
									' '
								),
							n = 0;
						n < o.length;
						n++
					)
						g(u, o[n]);
					e._i.push([i, s, a]);
				}),
				(e.__SV = 1));
		})(document, window.posthog || []);
		posthog.init('phc_GWo5w9PZVQQhzYvy0BOFA1P1M5m25jcUH4BKY2qQHsT', {
			api_host: 'https://us.i.posthog.com',
			person_profiles: 'always'
		});
	</script>
</svelte:head>

{#if children}
	{@render children()}
{:else}
	<p>Uh oh! Looks like something is missing.</p>
{/if}
