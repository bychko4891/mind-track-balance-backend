import { Column } from 'typeorm';
import { MotionVariant } from '@app/common/enums/motion-variant.enum';
import { UiColorToken } from '@app/common/enums/ui-color-token.enum';
import { Position } from '@app/common/enums/position.enum';

export abstract class BaseImage {
  @Column({ type: 'int', default: 0 })
  widthPx: number;

  @Column({ type: 'int', default: 0 })
  heightPx: number;

  @Column({
    type: 'enum',
    enum: MotionVariant,
    default: MotionVariant.None,
  })
  motionVariant: MotionVariant = MotionVariant.None;

  @Column({
    type: 'enum',
    enum: Position,
    default: Position.Main,
  })
  position: Position = Position.Main;

  @Column({
    type: 'enum',
    enum: UiColorToken,
    enumName: 'ui_color_token',
    default: UiColorToken.Default,
  })
  color: UiColorToken = UiColorToken.Default;
}
