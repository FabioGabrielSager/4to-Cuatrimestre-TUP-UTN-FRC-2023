package ar.edu.utn.frc.tup.lciii;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.*;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Documented
@Retention(RUNTIME)
@Target({TYPE, METHOD, CONSTRUCTOR})
public @interface Generated {
    /**}
     * Esta anotación se utilizará para evitar que una clase o método sea tomada en cuenta en los reportes de Jacoco
     */
}