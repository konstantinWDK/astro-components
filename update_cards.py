import re
import os

registry_path = 'src/data/registry/cards.ts'
with open(registry_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the usage replacements map
usage_map = {
    'glass-card': '`<GlassCard title="Project Info" subtitle="Q3 Report" hoverable padding="md">Main performance metrics.</GlassCard>`',
    'neumorphic-card': '`<NeumorphicCard padding="lg"><p>Elevated focus container</p></NeumorphicCard>`',
    'cyber-feature-card': '`<CyberFeatureCard title="System Core" subtitle="Neural engine">Activate protocol.</CyberFeatureCard>`',
    'profile-card': '`<ProfileCard name="Sarah Jenkins" role="Lead Developer" />`',
    'pricing-card': '`<PricingCard plan="Pro" price="49" featured><li>Unlimited Projects</li><li>24/7 Support</li></PricingCard>`',
    'blog-horizontal-card': '`<BlogHorizontalCard title="Building Astro Components" description="Learn to scale." tag="Tutorial" />`',
    'stat-card': '`<StatCard label="Total Revenue" value="$124,590" icon="📈" />`',
    'notification-card': '`<NotificationCard title="Updates Available" message="Version 2.0 is ready." type="info" />`',
    'glow-portfolio-card': '`<GlowPortfolioCard title="Redesign" subtitle="Web / 2024"><button>View</button></GlowPortfolioCard>`',
    'interactive-tilt-card': '`<InteractiveTiltCard title="3D Hover" description="Move your mouse over me." />`',
    'ecommerce-product-card': '`<EcommerceProductCard title="Premium Headphones" price="$299" tag="New" rating="5.0 ★" />`',
    'task-kanban-card': '`<TaskKanbanCard task="Update SEO metadata" date="Oct 24" assigneeInitials="MJ" priority="high" />`',
    'minimal-link-card': '`<MinimalLinkCard title="Documentation" href="/docs" />`',
    'retro-game-card': '`<RetroGameCard title="SUPER ASTRO" level="LVL 01" score="4820" />`',
    'music-player-mini': '`<MusicPlayerMini title="Moonlight" artist="Astro Orchestra" progress={60} />`',
    'glass-event-card': '`<GlassEventCard day={24} month="OCT" title="Dev Meetup" details="SF, CA" />`',
    'weather-widget-card': '`<WeatherWidgetCard temp="24°" city="Sunnyvale" condition="Clear" icon="☀️" />`',
    'testimonial-card-clean': '`<TestimonialCardClean quote="Best library ever." name="Alex Rivera" role="CTO at TechFlow" />`',
    'kanban-item-card': '`<KanbanItemCard title="Update SEO" priority="Prio" tag="SEO" />`'
}

def componentFromName(slug):
    # 'glass-card' -> 'GlassCard'
    parts = slug.split('-')
    return ''.join([p.capitalize() for p in parts])

def replace_block(match):
    slug = match.group(1)
    # Extract existing properties before code block
    prefix = match.group(0).split('code:')[0]
    
    comp_name = componentFromName(slug)
    # Special cases
    if comp_name == '3dPushButton': comp_name = '3dPushButton' # not in cards
    
    comp_path = f'src/components/lib/cards/{comp_name}.astro'
    try:
        with open(comp_path, 'r', encoding='utf-8') as f:
            comp_code = f.read().replace('`', '\\`').replace('$', '\\$')
    except:
        comp_code = "--- \\n // Error loading ---"

    usage_str = usage_map.get(slug, f'`<{comp_name}>Update</{comp_name}>`')
    
    return f"{prefix}code: `{comp_code}`,\n    usage: {usage_str},\n  }}"

# The regex matches an entire object entry starting with slug up to its closing brace
pattern = r"(slug:\s*'([^']+)'[\s\S]*?)code:\s*`[\s\S]*?`,\s*usage:\s*`<[^>]+>.*?</[^>]+>`,\s*}"
new_content = re.sub(pattern, replace_block, content)

# But wait, original usage strings might not match exactly `<[^>]+>.*?</[^>]+>`, 
# some usages are like `<NeumorphicCard>Content</NeumorphicCard>` 
# Let's use a simpler pattern linking from code: `...` down to usage: `...`,
pattern2 = r"(slug:\s*'([^']+)'[\s\S]*?)code:\s*`[\s\S]*?`,\s*usage:\s*`.*?`,\s*}"
new_content = re.sub(pattern2, replace_block, content)

with open(registry_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print("Registry updated.")
