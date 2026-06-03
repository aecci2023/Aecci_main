import { useThemeConfig } from './active-theme';
import { Label } from '@/components/ui/label';
import { Palette } from '@phosphor-icons/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { THEMES } from './theme.config';

export function ThemeSelector() {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <div className='flex items-center gap-2'>
      <Label htmlFor='theme-selector' className='sr-only'>
        Theme
      </Label>
      <Select value={activeTheme} onValueChange={setActiveTheme}>
        <SelectTrigger
          id='theme-selector'
          size="sm"
          className='w-36 h-8 rounded-full border border-black/[0.07] dark:border-white/[0.07] bg-black/[0.02] dark:bg-white/[0.04] text-foreground/65 hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.05] cursor-pointer text-[12px] font-[400] transition-all duration-200 gap-1.5 focus-visible:ring-0 focus-visible:ring-offset-0'
        >
          <Palette className='size-3.5 text-foreground/50 shrink-0' />
          <SelectValue placeholder='Select a theme' />
        </SelectTrigger>
        <SelectContent align='end'>
          {THEMES.length > 0 && (
            <SelectGroup>
              <SelectLabel>Themes</SelectLabel>
              {THEMES.map((theme) => (
                <SelectItem key={theme.value} value={theme.value}>
                  {theme.name}
                </SelectItem>
              ))}
            </SelectGroup>
          )}
        </SelectContent>
      </Select>
    </div>
  );
}
